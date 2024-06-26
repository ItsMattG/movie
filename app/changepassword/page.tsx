"use client";
import { useEffect, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '../utils/supabase';

export default function ChangePassword() {
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>(null);
	const [user, setUser] = useState<User | null>(null);
	const [metadata, setMetadata] = useState<any | null>(null);

  useEffect(() => {
		// Function to handle verifying the access_token
    const handleVerifyToken = async () => {
			const searchParams = new URLSearchParams(window.location.search);
			const access_token = searchParams.get('access_token');
			console.log('searchParams', searchParams)
			if (access_token) {
				console.log('yay acccess', access_token)
				setAccessToken(access_token);
				try {
					// Set the session with the access token
					const { error } = await supabase.auth.setSession({
						access_token,
						refresh_token: '' // Provide an empty refresh token as it's required
					});
					console.log('erroir', error)
					if (error) {
						console.error('Error setting session:', error.message);
						alert('Error setting session. Please try again.');
						// router.push('/login');
					} else {
						// Retrieve user information after setting session
						console.log('rar')
						// const { data: { user } } = await supabase.auth.getUser();
						// setUser(user);
						// setMetadata(user?.user_metadata);

						// if (user) {
						// 	console.log('User email:', user.email);
						// 	// Now you have access to the user's email, you can redirect or perform other actions
						// 	// For example, redirect to change password page
						// } else {
						// 	console.error('User not found in session');
						// 	alert('User not found in session. Please try again.');
						// 	// router.push('/login');
						// }
					}
				} catch (error) {
					console.error('Error verifying token:', error);
					alert('Error verifying token. Please try again.');
					// router.push('/login');
				}
			} else {
				console.log('sad')
				// router.push('/login');
			}
		};

		// Call the verification function on component mount
		handleVerifyToken();
	}, [router]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
		console.log('accessToken', accessToken)
    if (accessToken) {
      try {
        // Set the session with the access token
        const { error: sessionError } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: '' // Provide an empty refresh token as it's required
        });
				console.log('sessionError', sessionError)
        if (sessionError) {
          console.error('Error setting session:', sessionError.message);
          alert('Error setting session. Please try again.');
          return;
        }

        // Update the user's password
        const { error: updateError } = await supabase.auth.updateUser({
          password: newPassword
        });

        if (updateError) {
          console.error('Error updating password:', updateError.message);
          alert('Error updating password. Please try again.');
        } else {
          alert('Password updated successfully.');
          // router.push('/login');
        }
      } catch (error) {
        console.error('Unexpected error:', error);
        alert('Unexpected error. Please try again.');
      }
    }
  };

  return (
    <section className="bg-background-primary">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-background-tertiary/50 border rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-main-text md:text-2xl">
              Change Password
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="new-password" className="block mb-2 text-sm font-medium text-main-text">New Password</label>
                <input
                  type="password"
                  name="new-password"
                  id="new-password"
                  placeholder="••••••••"
                  className="bg-background-primary border border-background-secondary text-main-text sm:text-sm rounded-lg focus:ring-background-secondary focus:border-background-secondary block w-full p-2.5"
                  required={true}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-main-text">Confirm Password</label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-background-primary border border-background-secondary text-main-text sm:text-sm rounded-lg focus:ring-background-secondary focus:border-background-secondary block w-full p-2.5"
                  required={true}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="w-full text-button-text bg-button-color/90 hover:bg-button-color/50 focus:ring-4 focus:outline-none focus:ring-button-color font-medium rounded-lg text-sm px-5 py-2.5 text-center">Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
