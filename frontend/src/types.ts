export interface RootState {
    user: User | null;
}

export interface User {
    displayName: string | null;
    photoURL: string | null;
}