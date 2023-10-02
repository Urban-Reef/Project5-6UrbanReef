<script lang="ts">
    import Card from "../card.svelte";
    import Navbar from "../navbar.svelte";
    import * as reefData from "../../data.json";
    import Modal from "../modal.svelte";

    class Reef {
        reefName:string ="";
        image:string = "";
        active:string = "";

        constructor (reefname:string,image:string,active:string) {
            this.reefName = reefname;
            this.image = image;
            this.active = active;
        }
    }
    
    let reefs:Reef[] = getReefs();

    function getReefs():Reef[] {
        let newReef:Reef[] = [];
        reefData.reefs.forEach((reef) => {
            newReef.push(new Reef(reef.reefName,reef.image,reef.active));
        })
        return newReef;
    }

    let showModal = false;

</script>

<Navbar></Navbar>
<main class="container">
    <div class="sub-navbar">
        <button on:click={() => {showModal = true}} class="inline-btn btn">Reef toevoegen</button>
    </div>

    <div class="container">
        {#if reefs.length === 0}
            <p>Er zijn geen reefs gevonden</p>
        {:else}
            {#each reefs as {reefName,image,active}}
                <Card {reefName}
                    {image}
                    {active} />
            {/each}
        {/if}
    </div>
</main>
<Modal bind:showModal>
    <h1>Reef toevoegen</h1>
    <input type="text" placeholder="Reef naam">
</Modal>

<style>
    @import '../../style.scss';

</style>