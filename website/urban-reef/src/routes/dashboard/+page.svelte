<script lang="ts">
    import Card from "../card.svelte";
    import * as reefData from "../../data.json";
    import Modal from "../modal.svelte";

    class Reef {
        reefName:string ="";
        image:string = "";
        humidity:string = "55";
        temperture:string = "21";

        constructor (reefname:string,image:string) {
            this.reefName = reefname;
            this.image = image;
        }
    }
    
    let reefs:Reef[] = getReefs();

    function getReefs():Reef[] {
        let newReef:Reef[] = [];
        reefData.reefs.forEach((reef) => {
            newReef.push(new Reef(reef.reefName,reef.image));
        })
        return newReef;
    }

    let showModal = false;

</script>

<main class="container">
    <nav class="navbar " style="background-color: rgba(0,0,0,0);" data-bs-theme="dark">
        <button on:click={() => {showModal = true}} class="btn btn-outline-secondary">Reef toevoegen</button>
        
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
    @import '../../style.scss';

</style>