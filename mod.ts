const kv = await Deno.openKv()

const result = await kv.set(
    ["foo"],
    "bar"
)

const entry = await kv.get<string>(["foo"])

console.log(entry)