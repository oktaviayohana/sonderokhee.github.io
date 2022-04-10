function login() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label for='email'>Email</label>
                <br />
                <input type='text' name='email' />
                <br />
                
                <label for='password'>Password</label>
                <br />
                <input type='text' name='password' />
                <br />

                <input type='submit' value='Submit' />
                <br />
            </form>
        </div>
    );
}

export default login;