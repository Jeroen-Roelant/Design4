function sendMessage(){
    let content = document.getElementById("textContent").value;

    if (content != '') {

        // <div class="message">
        //     <p class="content">test message!</p>
        //     <div class="meta">
        //         <p class="time">12:00</p>
        //         <div class="check">&check;</div>
        //     </div>
        // </div>

        let msg = document.createElement("div");
        msg.className = "message";

        let para = document.createElement("p");
        para.className = "content";
        let node = document.createTextNode(content);
        para.appendChild(node);

        msg.appendChild(para);

        let meta = document.createElement("div");
        meta.className = "meta";

        let time = document.createElement("p");
        time.className = "time";
        let currentTime = new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit', hour12: false});
        time.appendChild(document.createTextNode(currentTime));
        meta.appendChild(time);

        let check = document.createElement("p");
        check.className = "check";
        check.appendChild(document.createTextNode("✓"));
        meta.appendChild(check);

        msg.appendChild(meta);

        let element = document.getElementById("chatlog");
        element.appendChild(msg);

        document.getElementById("textContent").value = '';
    }
}