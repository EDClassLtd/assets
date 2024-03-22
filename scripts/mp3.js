#!/usr/bin/env node

const fs = require('fs').promises
const baseUrl = "https://raw.githubusercontent.com/EDClassLtd/assets/master"
async function main() {
  const res = await fs.readdir('./mp3')
  const urls = res.map((r) => {
    return `"${baseUrl}/mp3/${r}"`
  })
  console.log(`
const SAMPLE_MP3 = [
${urls.join(",\n")}  
]`)
}

main().catch(console.error)
