const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

// export const RideTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        if(customEvent.detail.purchasedTicket === "Ticket") {

            // console.log("heard")
            contentTarget.innerHTML +=`<div class="person player"></div>`
        }
    })