<script>
    import Modal from "./modal.svelte";

    export let reefName = "";
    export let image = "";
    export let active = "";

    let showModal = false;
</script>

<div class="card">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={image} alt="reef image" class="reefImage">
    <h1>{reefName}</h1>
    <p>{reefName} is {active}</p>
    <button class="inline-btn btn" on:click={() =>  {showModal = true}}>Meer gegevens</button>
</div>
<Modal bind:showModal>
    <h1>{reefName}</h1>
    <p>Huidige data is:</p>
    <p>DATA DATA DATA</p>
</Modal>

<style lang="scss">
    @import "../style.scss";

</style>