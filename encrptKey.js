const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
    const wallet = new ethers.Wallet(process.env.GOERLI_PRIVATE_KEY)
    const encryptedJsonKey = await wallet.encrypt(
        process.env.GOERLI_PRIVATE_KEY_PASSWORD,
        process.env.GOERLI_PRIVATE_KEY
    )
    console.log(encryptedJsonKey)
    // use fs to create new file storing all the data of encryption
    fs.writeFileSync("./.encryptedJsonKey.json", encryptedJsonKey)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
