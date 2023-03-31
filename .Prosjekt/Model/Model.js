const model = {
    app: {
        currentPage: "loginPage",
        isAdmin: true,
        loggedInUser: null, // 'terje'
    },

    inputs: {
        newUserPage: {
            firstname: "",
            lastname: "",
            phoneNumber: "",
            postalCode: "",
            eMail: "",
            klasse: "", //Start IT, Get IT
            img: {
                imgSrc: "",
                imgName: "",
            }
        },
        loginPage: {
            userId: "",
            password: "",
            errorMessage: "",
        }, 
        chatPage: {
            newMessageInput: "",
        }, 
        profilePageElev: {
            LoggDone: false,
        },
        studentListPage: {
            searchBar: "",
            currentFilter: "Start IT",    
        },
    },
    // data
    DinFremgang: {
        
    },
    chatMessages: [
         {
                fromUserId: 'terje',
                toUserId: 'per',
                messageContent: "Hallo, hva er psykologisk trygghet?",  
                timeStamp: '2023-03-31 15:03',   // t = '2023-03-31 15:03'; new Date(t)    .toLocaleTimeString() 
                isRead: false,       
            },
    ],
    user: [
        {userId: 'terje', imgUrl: '' },
    ],
    temaer: [
        { id: 1, navn: 'Trygghet' },
        { id: 2, navn: 'Selvkontroll' },
        { id: 3, navn: 'skdjhfsd' },
        { id: 4, navn: 'dflhdsk' },
    ],
    utførteOppgaver: [
        { oppgaveId: 0, svar: 'fhjg', userId: 1, timeStamp: '2023...' },
        { oppgaveId: 1, svar: 'fhjg', userId: 1, timeStamp: '' },
    ],
    oppgaver: [
        {
            id: 0,
            Tittel: "Intro til trygghet",
            Tekst: "Trygghet er en viktig faktor for smidighet og godt sammarbeid i et team.",
            Type: "DropDown",
            hasCheckmark: false,
            isChecked: null,
            temaId: 1,
        },
        {
            id: 1,
            Tittel: "Oppg 1: Hva er trygghet",
            Tekst: "",
            Type: "DropDown",
            hasCheckmark: false,
            isChecked: null,
        },
        {
            Oppgave: 2,
            Tittel: "Oppg 2: Hvorfor er trygghet viktig?",
            Tekst: "",
            Type: "DropDown",
            hasCheckmark: false,
            isChecked: null,
        },
        {
            Oppgave: 3,
            Tittel: "Refleksjonsoppgave",
            Tekst: "Reflekter på hva du har gjort idag",
            Type: "Egentekst",
            hasCheckmark: true,
            isChecked: null,
        },
        {
            Oppgave: 4,
            Tittel: "Intro til Selvkontroll",
            Tekst: "Hva er din definisjon av selvkontroll? Diskuter dette i gruppen, og skriv ned hva dere tenker.",
            Type: "Dropdown",
            hasCheckmark: false,
            isChecked: null,
            temaId: 2,
        },
        {
            Oppgave: 5,
            Tittel: "Oppg 1: Hva er god selvkontroll?",
            Tekst: "",
            Type: "Dropdown",
            hasCheckmark: true,
            isChecked: null,
        },
        {
            Oppgave: 2,
            Tittel: "Oppg 2: Når får du bruk for selvkontroll?",
            Tekst: "",
            Type: "Dropdown",
            hasCheckmark: true,
            isChecked: null,
        },
        {
            Oppgave: 3,
            Tittel: "Oppg 3: Refleksjonsoppgave",
            Tekst: "",
            Type: "Dropdown",
            hasCheckmark: true,
            isChecked: null,
        }
    ]
};

