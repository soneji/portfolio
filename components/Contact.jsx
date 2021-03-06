import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

const Contact = classes => {
    const socials = [
        { name: "github", url: "https://github.com/soneji", Icon: GitHubIcon },
        { name: "email", url: "mailto:dhaval@soneji.xyz", Icon: EmailIcon },
    ];

    return (
        <div>
            {socials.length > 0 && (
                <div className={classes.heroButtons}>
                    <Typography
                        className={classes.caps}
                        component="h1"
                        variant="h4"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                    >
                        Contact Me
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {socials.map((Value, index) => {
                            return (
                                <Grid
                                    style={{
                                        display: "flex",

                                        height: "64px",
                                        width: "64px",
                                    }}
                                    item
                                    key={index}
                                >
                                    <Button style={{ minWidth: 50 }}>
                                        <a
                                            href={Value.url}
                                            title={Value.name}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Value.Icon className={classes.myIcon} />
                                        </a>
                                    </Button>
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
            )}
        </div>
    );
};
export default Contact;
