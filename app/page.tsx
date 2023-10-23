import Link from "next/link";

const lorem = (
  <p>
    Dolore excepteur ut culpa consectetur veniam deserunt officia esse ea. Et
    qui reprehenderit consectetur voluptate. Elit deserunt anim incididunt do
    officia. Nostrud aute aliquip exercitation do incididunt fugiat proident
    dolore ea. Minim enim amet ut minim laboris deserunt ad labore qui. Velit id
    consequat Lorem quis non ipsum ea ipsum excepteur sunt magna. Anim qui in
    sint non esse. Eiusmod occaecat labore veniam proident occaecat consequat
    elit dolor mollit. Sint deserunt exercitation nulla fugiat anim esse nulla
    id irure et labore officia aliquip. Officia laborum qui nostrud laborum
    aliqua qui velit occaecat magna nulla id. Aute et occaecat laborum nostrud
    duis. Velit proident amet incididunt minim amet quis sunt ut sunt culpa ea
    culpa occaecat amet. Occaecat culpa officia aliquip fugiat anim ut officia
    incididunt culpa est laborum. Anim laborum incididunt sunt qui tempor culpa
    nisi. Ad adipisicing esse eu amet nostrud mollit quis proident nostrud in
    Lorem occaecat. Do magna officia in id id anim consectetur dolor. Eu do
    consectetur fugiat exercitation ad. Lorem ut excepteur fugiat occaecat et
    ullamco incididunt velit dolor laboris fugiat. Sit nisi ut non aliqua
    officia esse. Lorem cupidatat ut excepteur proident veniam labore non ipsum.
    Laborum et deserunt laborum aliquip nulla labore nisi ad reprehenderit in.
    Ex id fugiat dolor do eu occaecat fugiat. Exercitation sint excepteur ea non
    aliqua. Et velit irure aute aliquip nostrud. Irure dolore ex tempor ut.
    Consequat Lorem dolor sunt et aute. Commodo ut consequat do pariatur qui
    culpa duis quis ullamco ullamco. Excepteur occaecat est proident duis ea
    dolor voluptate eiusmod enim do enim. Amet nulla amet veniam pariatur
    voluptate do aliqua reprehenderit deserunt adipisicing aliqua enim excepteur
    eiusmod. Fugiat adipisicing ullamco sint incididunt ut nostrud elit ut dolor
    minim sunt ullamco officia velit. Dolore velit aliquip fugiat cupidatat
    deserunt reprehenderit voluptate id. Enim mollit laboris aliqua nisi. Est id
    sint Lorem consectetur quis culpa deserunt. Ad ipsum amet do proident ad.
    Dolor ex elit cupidatat ullamco sunt esse deserunt anim sit non. Proident
    laborum ut Lorem sunt sunt quis deserunt consectetur reprehenderit
    consectetur laboris. Reprehenderit cillum velit aliquip laboris occaecat
    sint velit exercitation in deserunt. Irure cillum magna duis nulla. Est ut
    laboris velit excepteur ad ut voluptate culpa enim sit et duis fugiat. Ut
    pariatur ad minim reprehenderit magna enim duis fugiat aliquip. Dolore
    dolore et commodo aliquip. Laboris fugiat deserunt irure aliquip anim
    aliquip do fugiat nostrud enim aute dolor in. Labore non ex est id esse
    esse. Magna fugiat cillum et reprehenderit pariatur ullamco elit est
    proident velit laboris. Irure ipsum irure sunt ex. In nulla nostrud ad
    laborum ea ut consectetur occaecat ad quis velit. Eu magna ullamco ipsum sit
    minim consectetur dolore ullamco id sit consectetur magna officia. Tempor
    commodo nostrud duis laborum Lorem labore ipsum ad adipisicing eu.
  </p>
);

export default function Home() {
  return (
    <>
      <h1>Instructions:</h1>
      <p>Scroll down to the link at the bottom of the page</p>
      <ul>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
        <li>{lorem}</li>
      </ul>
      <h2>Click me</h2>
      <Link href="/otherpage">Other page</Link>
    </>
  );
}
