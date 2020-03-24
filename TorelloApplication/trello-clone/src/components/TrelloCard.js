import React from "react";
import { Card } from "react-bootstrap";

const TrelloCard = ({ text }) => {
  return (
    <Card style={styles.cardContainer}>
      <Card.Body>
        { text }
      </Card.Body>
    </Card>
  )
}

const styles = {
	cardContainer: {
		marginBottom: "10px",
	}
}

export default TrelloCard;