import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate(path);
  }
  return (
    <Fragment>
      <div class="banner">
        <div class="col-6 d-flex align-self-center">
          <h1>Bienvenue sur GoTuto.fr</h1>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <img
            src="img/gopher-stupid.png"
            alt="home banner"
          ></img>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 d-flex justify-content-center">
            <pre class="m-4 d-inline-flex">
              <code class="language-go">{`
package main

import "fmt"

func main(){
  fmt.Println("Hello World")
}
`}</code>
            </pre>
          </div>
          <div class="col d-flex justify-content-center">
            <button
              onClick={routeChange}
              class="align-self-center btn btn-primary"
            >
              Introduction à Golang
            </button>
          </div>
          <div class="row img-container align-items-center">
            <div class="col-6">
              <h3>Gravissez une montagne de compétence.</h3>
              <p>
                Apprenez Golang au travers de tutos amusants et gravissez la
                montagne de compétence d'un language de programmation simple et
                puissant.
              </p>
            </div>
            <div class="col-6">
              <img
                class="img-fluid"
                src="img/gopher-climbing.png"
                alt=""
              ></img>
            </div>
          </div>

          <div class="row img-container align-items-center">
            <div class="col-6 d-flex justify-content-center">
              <img
                class="img-fluid"
                src="img/gopher-student.png"
                alt=""
              ></img>
            </div>
            <div class="col-6">
              <h3>Un site ecrit en golang.</h3>
              <p>
                GolangTuto.fr est un site exclusivement ecrit en golang afin de
                vous prouvez de l'efficacité de ce language.
              </p>
            </div>
          </div>

          <div class="row img-container align-items-center">
            <div class="col-6">
              <h3>Pourquoi apprendre le Go ?</h3>
              <p>
                Go est un language très simple d'accès est qui permet de
                réaliser des tâches hétérogènes.
              </p>
            </div>
            <div class="col-6">
              <img
                class="img-fluid"
                src="https://www.picng.com/upload/question_mark/png_question_mark_52353.png"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
