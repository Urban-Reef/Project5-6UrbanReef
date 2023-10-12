<script lang="ts">
    let inputPassword:string = "";
    let inputUsername:string = "";

    const username:string = "user@example.com";
    const password:string = "test1234";

    let validation:boolean = true;

    function validate() {
        if(username === inputUsername && password === inputPassword) {
            window.location.href = "/dashboard";
            return;
        }
        validation = false;
        return;
    }
</script>

<div class="container">
    <div class="card">
        <h1>Urban Reef dashboard</h1>
        <p>Gebruikersnaam</p>
        <input bind:value={inputUsername} type="text" placeholder="gebruikersnaam" />
        <p>Wachtwoord</p>
        <input bind:value={inputPassword} type="password" placeholder="wachtwoord" />
        {#if !validation}
            <p class="error">Combinatie van gebruikersnaam en wachtwoord ongeldig</p>
        {/if}

        <a class="btn" href="/"  on:click={validate}>Login</a>
    </div>
</div>


<style lang="scss">
    @import '../style.scss';
</style>