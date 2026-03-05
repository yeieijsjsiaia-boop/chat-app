const socket = io()

function sendMessage(){

  const input = document.getElementById("message")

  socket.emit("chat message", input.value)

  input.value = ""
}

socket.on("chat message", function(msg){

  const li = document.createElement("li")

  li.textContent = msg

  document.getElementById("messages").appendChild(li)

})
