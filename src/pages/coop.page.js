import { Container, Row, Col } from "react-bootstrap";

import './coop.style.scss'

const Coop = () => {
  return (
    <Container className="container">
      <h1>Mine samarbeidspartnere</h1>
        <div id='table-con'>
            <table>
                <tr>
                    <td>Skogr / Timberwise</td>
                    <td>Jab</td>
                    <td>Green Apple</td>
                </tr>
                <tr>
                    <td>Intag</td>
                    <td>Pagunette</td>
                    <td>Wikholmform</td>
                </tr>
                <tr>
                    <td>Kymo</td>
                    <td>Cutfab AS (møbelsnekker)</td>
                    <td>Elen Møbelstudio</td>
                </tr>
                <tr>
                    <td>Brubakken Home</td>
                    <td>Hudson Valley</td>
                    <td>Serax</td>
                </tr>
                <tr>
                    <td>Home Factory</td>
                </tr>
            </table>
        </div>

    </Container>
  );
};

export default Coop;
