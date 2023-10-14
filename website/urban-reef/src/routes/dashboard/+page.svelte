<script lang="ts">
    import Card from "../card.svelte";
    import * as reefData from "../../data.json";
    import Modal from "../modal.svelte";
    import { Reef } from "$lib/models/reef.model";
    
    let reefs:Reef[] = getReefs();

    function getReefs():Reef[] {
        let newReef:Reef[] = [];
        reefData.reefs.forEach((reef) => {
            newReef.push(new Reef(reef.reefName,reef.image,reef.data?.humidity,reef.data?.temperture));
        })
        return newReef;
    }

    function goToSettings() {
        window.location.href = "/user";
        return;
    }

    let showModal = false;

</script>

<main class="container">
    <nav class="navbar custom-navbar" style="background-color: rgba(0,0,0,0);">
        <button on:click={() => {showModal = true}} class="btn custom-btn-outline">Reef toevoegen</button>
        <input type="search" class="search" placeholder="zoeken...">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="nav-item" on:click={goToSettings}>
            <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" fill="grey" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
        </div>
    </nav>
      
    <!-- Reef zoek optie toevoegen & kaart van reefs -->
    <!-- 3D visualisatie van de reefs bv. locatie van sensoren en/of data 3D visualisatie -->

    <div class="container">
        {#if reefs.length === 0}
            <p>Er zijn geen reefs gevonden</p>
        {:else}
            {#each reefs as {reefName,image,humidity,temperture}}
                <Card {reefName}
                    {image}
                    {humidity}
                    {temperture} />
            {/each}
        {/if}
    </div>
</main>
<Modal bind:showModal>
    <h1>Reef toevoegen</h1>
    <input type="text" placeholder="Reef naam">
</Modal>

<style>
    @import "../../style.scss";
</style>