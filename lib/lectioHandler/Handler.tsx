export async function ConnectToLectio({ Username, Password, GymnasiumNumber }: UserLogin): Promise<boolean> {
    const lectioLoginPage: string = `https://www.lectio.dk/lectio/${GymnasiumNumber}/login.aspx`;

    const postBody: FormData = new FormData();

    postBody.append('username', Username);
    postBody.append('password', Password);

    let response;
    
    await fetch(lectioLoginPage, {
        method: 'POST',
        body: postBody,
    }).then(res => response = res);

    console.log(response)

    return true;
}

export type UserLogin = {
    Username: string,
    Password: string,
    GymnasiumNumber: number
}