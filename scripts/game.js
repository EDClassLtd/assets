#!/usr/bin/env node

const fs = require('fs').promises
const baseUrl = "https://raw.githubusercontent.com/EDClassLtd/assets/master"
async function main() {
  const res = await fs.readdir('./game')
  const urls = res.map((r) => {
    return `"${baseUrl}/game/${r}"`
  })
  console.log(`
const GAME_THUMBS = [
${urls.join(",\n")}  
]`)
}

main().catch(console.error)
