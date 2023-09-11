import React from "react";
import styles from "./Login.module.css";
import {
  Head,
  Button,
  Categoria2,
  Input,
  LerMais,
  Heading2,
} from "../../components";
import img from "../../assets/svg/user.svg";

const Login = () => {
  return (
    <section className={styles.login}>
      <Head
        title="Entrar na conta"
        description="Entrar na conta do site Naped, aqui você encontra as novidades sobre animes, jogos e filmes."
      />

      <div className={styles.title}>
        <Categoria2>Naped</Categoria2>
        <Heading2>Entrar na conta</Heading2>
      </div>

      <form className={styles.form}>
        <Input
          type="text"
          name="text"
          backgroundImage={`url(${img})`}
          placeholder="Digite seu usuário"
        />
        <Input
          type="password"
          name="password"
          backgroundImage="url(../../src/assets/svg/lock.svg)"
          placeholder="Digite sua senha"
        />

        <Button>Logar na conta</Button>
      </form>

      <LerMais link="/conta/cadastrar">Criar uma conta</LerMais>
    </section>
  );
};

export default Login;
