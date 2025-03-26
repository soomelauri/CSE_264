import { Card, CardContent, Typography } from "@mui/material";

const UserCard = (user) => {
    console.log(user)

    return(
        <Card style={{ width: '300px', margin: '10px', color: 'black'}}>
            <CardContent>
                <Typography>
                    {user.user.name}
                    <div>
                        {user.user.email}
                    </div>
                    <div>
                        {user.user.company.name}
                    </div>
                </Typography>
            </CardContent>
        </Card>
    )

}

export default UserCard
