import axios from "axios";
import getInput from "./getInput";

const fetchData = async (
  userSelection: (number | null)[],
  computerSelection: (number | null)[]
): Promise<number | undefined> => {
  try {
    // Define the URL and request body
    const url = "https://hiring-react-assignment.vercel.app/api/bot";
    // const requestBody = [];
    const arr = [...Array(9)];

    const requestBody = arr.map((_, index) => {
      const x = getInput(userSelection, computerSelection, index);
      if (x === "") return null;
      return x;
    });

    const response = await axios.post<number>(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const boxNumber: number = response.data;
    return boxNumber;
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
};

export default fetchData;
