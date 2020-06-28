
(function () {
    /**
     * It stores the user chat data 
     */
    let chatData = [];

    /**
     * Search by User name or message
     */
    function searchValue(event) {
        const value = event.target.value.toLowerCase();
        const data = chatData.filter(val => val.name.toLowerCase().indexOf(value) > - 1 || val.message.toLowerCase().indexOf(value) > -1);
        displayChatList(data);

    }

    const renderTopBar = () => {
        const html = `
            <img src="previous.png" class="icon-size">
            <input type="text" name="search" placeholder="Search..">
            `;

            // <input type="text" id="searchbox" value="" onkeyup="searchValue(event)" placeholder="Seach here...">
        // <img src="search.png" id="searchbutton" class="icon-size"></img>

        document.getElementById('top-bar').innerHTML = html;
    }
    /**
     * Get status list data
     */
    const getStatusList = () => {
        const data = [
            { id: 1, name: 'Akshay', imageUrl: 'roman reings.jpg'},
            { id: 2, name: 'Roman', imageUrl: 'ssr.jpg', active: true  },
            { id: 3, name: 'alester', imageUrl: 'aleisterblack2018.jpg' },
        ];

        return new Promise((res, rej) => {
            res(data);
        });
    }

    /**
     * Display status list data
     */
    const displayStatusList = () => {
        getStatusList().then(data => {
            let html = '';
            data.forEach(res => {
                const status = `
                <div class="photobarchild">
                    <img src="${res.imageUrl}" class="img ${res.active ? 'active-status': ''}">
                    <figcaption class="status-name">${res.name}</figcaption>
                </div>`;

                html += status;
            });

            document.getElementById('notification-bar').innerHTML = html;
        });
    }

    /**
     * Get chat list data
     */
    const getChatList = () => {
        const data = [
            { id: 1, name: " finn balor", message: "  how are you bro?😜", active: " just now", notification: 2, imageUrl: "finn balor.jpg" },
            { id: 2, name: "Bray white ", message: " good night bro😜", active: "5 minutes", notification: 1, imageUrl: "bray.jpg" },
            { id: 3, name: " Ajstyle", message: " whats goingon?😇", active: " 10:30 am ", notification: 4, imageUrl: "ajstyle.jpg" },
            { id: 4, name: " Braun strowman", message: " i am fine", active: " 3:03pm", notification: 5, imageUrl: "monster.jpg" },
            { id: 5, name: " Randy orton", message: " how are you bro?😆", active: " 24/06/2020", notification: 0, imageUrl: "randy.jpg" },
            { id: 6, name: " Randy orton", message: " how are you bro?", active: " 24/06/2020", notification: 0, imageUrl: "randy.jpg" },
            { id: 6, name: " Randy orton", message: " how are you bro?", active: " 24/06/2020", notification: 0, imageUrl: "randy.jpg" },
            { id: 6, name: " Randy orton", message: " how are you bro?", active: " 24/06/2020", notification: 0, imageUrl: "randy.jpg" },
            { id: 6, name: " Randy orton", message: " how are you bro?", active: " 24/06/2020", notification: 0, imageUrl: "randy.jpg" },
            { id: 6, name: " Randy orton", message: " how are you bro?", active: " 24/06/2020", notification: 0, imageUrl: "randy.jpg" },
            { id: 6, name: " Randy orton", message: " how are you bro?", active: " 24/06/2020", notification: 0, imageUrl: "randy.jpg" },
            { id: 6, name: " Randy orton", message: " how are you bro?", active: " 24/06/2020", notification: 0, imageUrl: "randy.jpg" },
            { id: 6, name: " Randy orton", message: " how are you bro?", active: " 24/06/2020", notification: 0, imageUrl: "randy.jpg" },

        ];
        return new Promise((res, rej) => {
            res(data);
            chatData = data;
        });
    }

    /**
     * Display chat list data
     */
    const displayChatList = (data) => {
        let html = '';
        data.forEach(res => {
            const chat = `
                    <div class="chat-row">
                        <div class="chat-photo">
                            <img class="chatimg" src="${res.imageUrl}">
                        </div>
                        <div class="chat-detail">
                            <div class="chat-username">
                            ${res.name}
                            </div>
                            <div class="chat-message">
                            ${res.message}
                            </div>
                        </div>
                        <div class="chat-notification">
                            <span>${res.active}</span>
                            ${res.notification ?
                    `<div class="notification">
                                ${res.notification}
                            </div>` : ''}
                        </div>
                    </div>
                    <div class="divider"></div>`;

            html += chat;
        });

        document.getElementById('chat-container').innerHTML = html;

        if (data.length === 0) {
            document.getElementById('chat-container').innerHTML = `<div class="nouserfound-text">No user found</div>`;
        }
    }



    getChatList().then(data => {
        displayChatList(data);
    });

    renderTopBar();
    displayStatusList();
})();