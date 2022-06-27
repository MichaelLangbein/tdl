<script>
    import { currentTask } from "../stores/stores";


    let ct = $currentTask;
</script>

<div>
    <h2>{ct.title}</h2>
    <textarea name="" id="" cols="30" rows="10">
        {ct.body}
    </textarea>
</div>