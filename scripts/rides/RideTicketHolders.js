const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

// export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        if(customEvent.detail.purchasedTicket === "Ticket") {

            console.log("heard")
            contentTarget.innerHTML +=`<div class="person rider"></div>`
        }
    })
// }

