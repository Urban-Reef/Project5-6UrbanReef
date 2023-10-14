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
              <p class="card-text">Huidige luchtvochtigheid: {humidity}% | Huidige temperatuur: {temperture}&deg; <br> 
                <small class="text-body-secondary">Updated 2 seconden terug</small></p>
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
    <button class="btn custom-btn-outline">luchtvochtigheid</button>
    <button class="btn custom-btn-outline">temperatuur</button>
    <button class="btn custom-btn-outline">foto gallerij</button>
    <!-- <button class="btn custom-btn-outline">3D visualisatie</button> -->
    <!-- Grafiek van luchtvochtigheid + temperatuur -->
    <table class="charts-css area  show-primary-axis show-10-secondary-axes" id="my-chart">
      <tbody>
        <tr>
          <td style="--start: 0.2; --size: 0.4"> <span class="data"> 40% </span> </td>
        </tr>
        <tr>
          <td style="--start: 0.4; --size: 0.65"> <span class="data"> 65% </span> </td>
        </tr>
        <tr>
          <td style="--start: 0.65; --size: 0.35"> <span class="data"> 35% </span> </td>
        </tr>
        <tr>
          <td style="--start: 0.35; --size: 0.4"> <span class="data"> 40% </span> </td>
        </tr>
        <tr>
          <td style="--start: 0.4; --size: 0.65"> <span class="data"> 65% </span> </td>
        </tr>
        <tr>
          <td style="--start: 0.65; --size: 0.35"> <span class="data"> 35% </span> </td>
        </tr>
        <tr>
          <td style="--start: 0.35; --size: 0.4"> <span class="data"> 40% </span> </td>
        </tr>
        <tr>
          <td style="--start: 0.4; --size: 0.65"> <span class="data"> 65% </span> </td>
        </tr>
        <tr>
          <td style="--start: 0.65; --size: 0.35"> <span class="data"> 35% </span> </td>
        </tr>
        <tr>
          <td style="--start: 0.35; --size: 0.4"> <span class="data"> 40% </span> </td>
        </tr>
        <tr>
          <td style="--start: 0.4; --size: 0.65"> <span class="data"> 65% </span> </td>
        </tr>
        <tr>
          <td style="--start: 0.65; --size: 0.35"> <span class="data"> 35% </span> </td>
        </tr>
        <tr>
          <td style="--start: 0.35; --size: 0.4"> <span class="data"> 40% </span> </td>
        </tr> 
      </tbody>
    </table>

    <ul class="nav nav-underline">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Dag</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Week</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Maand</a>
      </li>
    </ul>
    <!-- Knoppen om de data van de afgelopen dag, week, maand tot nu te bekijken -->
</Modal>

<style lang="scss"> 
    @import "../style.scss";
    @import "../../node_modules/charts.css/dist/charts.css";

    #dot-btn {
        margin-top: 40%;
    }
    #my-chart {
      margin-top: 2em;
      height: 20em;
      width: 50em;
    }

    .area {
      --color: rgba(182,217,183,0.7);
    }

    .nav-link {
      color: black;
    }
</style>