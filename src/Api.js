const gitHubUrl = 'https://ign-apis.herokuapp.com/';

    // const [userData, setUserData] = useState({});

    useEffect(() => {
        // getGitHubUserWithFetch()   
        let myRequest = new XMLHttpRequest();
        myRequest.open('GET', gitHubUrl)
        myRequest.onload = function () {
            // let data = myRequest.responseText
            // let jsondata = JSON.parse(data)
            // console.log(data);
            console.log(myRequest.responseText);
        }

        myRequest.send()
    }, []);
    // const getGitHubUserWithFetch = async () => {
    //     const response = await fetch(gitHubUrl,{mode:'no-cors'});
    //     const jsonData = await response.json();
    //     setUserData(jsonData);
    //     console.log(userData);
    // };