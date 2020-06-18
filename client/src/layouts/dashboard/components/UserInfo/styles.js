import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    descriptionDatabase: {
        fontSize: 11,
        margin: 0
    },
    namePeople: {
        fontSize: 16,
        margin: 0,
        fontWeight: 600
    },
    email: {
        fontSize: 13,
        margin: 0
    },
    container: {
        margin: "0 auto",
        padding: "10px",
        textAlign: "center"
    },
    image: {
        maxWidth: "120px"
    },
    loading: {
        backgroundColor: "#777777",
        padding: 15,
        width: "100%"
    }
}));

export default styles;
