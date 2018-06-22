import Friends from '../data/friends';

const apiRoutes = (app) => {
    app.get('/api/friends', (req,res) => {
        res.json(Friends);
    })

    app.post('/api/friends', (req,res) => {
        let match = {
            name: '',
            image: '',
            isMatch: Infinity,
        }

        const user = req.body;
        const userVals = user.values;

        for (let i = 0; i < Friends.length; i++) {
            const friendData = Friends[i];

            let dif = 0;
    
            for (let j = 0; j < friendData.values.length; j++) {
                const friendDataVals = friendData.values[j]; //friendlist data
                const currentUserVals = userVals[j]; //your data
                
                dif += Math.abs(parseInt(currentUserVals) - parseInt(friendDataVals));
            }
    
            if (dif <= match.isMatch) {
                match.name = friendData.name;
                match.image = friendData.image;
                match.isMatch = dif;
            }
        }


        Friends.push(user);
        res.json(match);
        console.log(match);
    })
}

export default apiRoutes;