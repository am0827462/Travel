<template>
    <div class="row">
        <div class="col-sm-6">
            <div class="card">
                <img v-bind:src="imageprop" alt="dog">
                <div class="card-body bg-dark">
                    <h5 class="card-title text-white">Random Quote and Dog of the Day</h5>
                    <h5 class="card-title text-info">{{bodyprop}}</h5>
                    <p class="card-text text-white"> - {{authorprop}}</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card">
                <img v-bind:src="nasaurlprop" alt="nasa">
                <div class="card-body bg-dark">
                    <h5 class="card-title text-white">NASA Image of the Day</h5>
                    <h5 class="card-title text-info">{{titleprop}}</h5>
                    <p class="card-text text-white">{{explainprop}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Quote",
    props:['bodyprop','authorprop','imageprop','nasaurlprop','explainprop','titleprop']
}
</script>
<style scoped>
 img{
    width: 538px;
    height: 420px;
 }
</style>