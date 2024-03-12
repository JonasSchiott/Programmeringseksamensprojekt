function ConnectToLectio(userLogin: UserLogin): boolean {

    return true;
}

interface UserLogin {
    Username: string,
    Password: string,
    GymnasiumNumber: number
}