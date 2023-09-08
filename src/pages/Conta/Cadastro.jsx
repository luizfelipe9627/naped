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

const Login = () => {
  return (
    <section className={styles.login}>
      <Head
        title="Cadastrar conta"
        description="Cadastrar conta do site Naped, aqui você encontra as novidades sobre animes, jogos e filmes."
      />

      <div className={styles.title}>
        <Categoria2>Naped</Categoria2>
        <Heading2>Faça uma conta</Heading2>
      </div>

      <form className={styles.form}>
        <Input
          type="text"
          name="text"
          backgroundImage="url(../../src/assets/svg/user.svg)"
          placeholder="Digite seu usuário"
        />
        <Input
          type="email"
          name="email"
          backgroundImage="url(../../src/assets/svg/at-sign.svg)"
          placeholder="Digite seu email"
        />
        <Input
          type="password"
          name="password"
          backgroundImage="url(../../src/assets/svg/lock.svg)"
          placeholder="Digite sua senha"
        />
        <Input
          type="password"
          name="password"
          backgroundImage="url(../../src/assets/svg/lock.svg)"
          placeholder="Digite sua senha novamente"
        />

        <Button>Criar a conta</Button>
      </form>

      <LerMais link="/conta/login">Já tenho uma conta</LerMais>
    </section>
  );
};

export default Login;
