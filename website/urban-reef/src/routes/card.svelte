<script>
    import Modal from "./modal.svelte";

    export let reefName = "";
    export let image = "";
    export let humidity = "";
    export let temperture = "";

    let showModal = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="card mb-3" on:click={() => showModal = true}>
        <div class="row g-0">
          <div class="col-md-2">
            <img src="{image}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title">{reefName}</h5>
              <p class="card-text">Huidige luchtvochtigheid: {humidity}% | Huidige temperatuur: {temperture}&deg;</p>
              <p class="card-text"><small class="text-body-secondary">Updated 2 seconden terug</small></p>
            </div>
          </div>
          <div class="col-sm-1">
            <button class="btn" id="dot-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  </svg>
            </button>
          </div>
        </div>
      </div>
<Modal bind:showModal>
    <h1>{reefName}</h1>
    <button class="btn btn-outline-success ">luchtvochtigheid</button>
    <button class="btn btn-outline-success ">temperatuur</button>
    <button class="btn btn-outline-success ">foto's</button>
    <button class="btn btn-outline-success ">3D visualisatie</button>
    <!-- Grafiek van luchtvochtigheid + temperatuur -->
    <!-- Knoppen om de data van de afgelopen dag, week, maand tot nu te bekijken -->
</Modal>

<style lang="scss"> 
    @import "../style.scss";

    #dot-btn {
        margin-top: 40%;
    }
</style>