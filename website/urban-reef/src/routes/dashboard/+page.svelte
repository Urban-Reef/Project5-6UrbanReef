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
            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <rect fill="none" height="256" width="256"/>
                <circle cx="128" cy="128" fill="none" r="96" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
                <circle cx="128" cy="120" fill="none" r="40" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
                <path d="M63.8,199.4a72,72,0,0,1,128.4,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>
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