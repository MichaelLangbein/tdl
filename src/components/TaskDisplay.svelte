<script>
    import { db } from "../stores/stores";

    const d = $db;
    $: ct = d.getRoot();

</script>

<div>
    <h2>{ct.title}</h2>
    <input type="text" bind:value={ct.body}>
</div>