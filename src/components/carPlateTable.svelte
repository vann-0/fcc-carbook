<script>
    import requests from '../data/requests.js';
    export let states;
    function carPlateDelete(id_car){
        try {
            const deleteData = requests.carPlateDelete(id_car);
        } catch (error) {
            console.log(error);
        }               
    }
    
</script>

<style>
    .container{
        width:534px;
        text-align: center;
        margin: 0 auto;
    }
</style>

<div class="section">
    <div class="container">
        <table class="table is-bordered is-striped">
            <thead>
                <tr>
                    <th>ID_Car</th>
                    <th>Brand</th>
                    <th>Driver</th>
                    <th>Tel_number</th>
                    <th>Plate_number</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {#each states as plate (plate.plate)}
                    <tr>
                        <td>
                            {plate.id_car}
                        </td>
                        <td>
                            {plate.brand}
                        </td>
                        <td>{
                            plate.driver}
                        </td>
                        <td>
                            {plate.tel_number}
                        </td>
                        <td>
                            {plate.plate}
                        </td>
                        <td>
                        <button on:click={carPlateDelete(plate.id_car)}>Delete</button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>