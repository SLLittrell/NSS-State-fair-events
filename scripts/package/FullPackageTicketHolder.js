const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelectorAll("div.people")

// export const RideTicketHolders = () => {
     const target = () => {
        contentTarget.forEach(click => { 
        click.innerHTML +=`<div class="person bigSpender"></div>`
     })
     }   
    eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
        if(customEvent.detail.purchasedTicket === "Ticket") {
            target()
        // console.log("heard")
    }
})
    