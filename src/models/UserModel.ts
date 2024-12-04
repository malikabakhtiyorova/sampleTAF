export interface UserModel {
    username: string;
    password: string;
    email?: string;
    role?: string;
}

export class User implements UserModel {
    username: string;
    password: string;
    email?: string;
    role?: string;

    constructor(username: string, password: string, email?: string, role?: string) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    }

    static createDefaultUser(): User {
        return new User('default_user', 'default_password');
    }

    static createAdminUser(): User {
        return new User('admin', 'admin_password', 'admin@example.com', 'admin');
    }
}
