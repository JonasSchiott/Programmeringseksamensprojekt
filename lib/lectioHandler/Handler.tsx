export async function ConnectToLectio({ Username, Password, GymnasiumNumber }: UserLogin): Promise<boolean> {
    const lectioLoginPage = `https://www.lectio.dk/lectio/${GymnasiumNumber}/login.aspx`;

    const postBody: FormData = new FormData();

    postBody.append('username', Username);
    postBody.append('password', Password);

    let response: object = {};
    
    await fetch(lectioLoginPage, {
        method: 'POST',
        body: postBody,
    }).then(res => response = res.json);

    console.log(response);

    return true;
}

type UserLogin = {
    Username: string,
    Password: string,
    GymnasiumNumber: number
}