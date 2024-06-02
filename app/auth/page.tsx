import { User } from '@supabase/supabase-js';
import { useEffect, useState, FC, ReactElement, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '../utils/supabase';

const withAuth = (Component: FC) => {
	const AuthenticatedComponent = (props: any): ReactElement => {
		const router = useRouter();
		const [user, setUser] = useState<User | null>(null);
		const [metadata, setMetadata] = useState<any | null>(null);

		useEffect(() => {
			const fetchUser = async () => {
				const { data: { user } } = await supabase.auth.getUser();
				setUser(user);
				setMetadata(user?.user_metadata);
				if (!user) router.push('/signin');
			};

			fetchUser();
		}, []);

		return <Component />;
	};

	return AuthenticatedComponent;
};

export default withAuth;