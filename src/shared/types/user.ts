interface IUser {
    id: number | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    avatar: string | null;
}

interface ICredentials {
    id: string | null;
    token: string | null;
}

export type { IUser, ICredentials };
