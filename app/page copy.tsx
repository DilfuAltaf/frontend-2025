// export default function HomePage() {
//   return (
//     <div>
//       <h1 className="text-red-500">Welocome to Next Js</h1>
//       <Cart count={1} wordling="Test" />
//       <Cart count={2} isView={false} />
//       <Cart count={3} isView />
//       <Cart count={4} isView={true} />
//     </div>
//   );
// }

// function Cart({ count, wordling, isView }: { count: number; wordling?: string; isView?: boolean }) {
//   return (
//     <div className="h-14 w-48 rounded-2xl border border-red-500">
//       {count} <span className="text-red-500">{wordling}</span>
//       {isView ? <span>Ok</span> : <span>No</span>}
//     </div>
//   );
// }

// export default function HomePage() {
//   return (
//     <div className="bg-gray-100 px-4 py-7">
//       <div className="text-center">
//         <h1 className="text-3xl font-semibold text-black">
//           Project <span className="text-3xl text-blue-700">Dashboard</span>
//         </h1>
//       </div>
//       <h2 className="py-3 text-center text-black">
//         Welcome back, Budi Santoso. Here's an overview of your current projects
//         and task
//       </h2>
//       <div className="px-32">
//         <div className="flex gap-5">
//           <Cube1 icon="🐫" number={12} deskription="Toatal Projects" />
//           <Cube1 icon="🐈" number={7} deskription="Completed" />
//           <Cube1 icon="🦒" number={3} deskription="In Progress" />
//           <Cube1 icon="🦫" number={2} deskription="Pending" />
//         </div>
//         <h3 className="my-7 text-2xl text-black">Task Overview</h3>
//         <div className="flex flex-col gap-5 bg-gray-100">
//           <Cube2 title="Create user authentication" time={4} type="Development"/>
//           <Cube2 title="Design landing page" time={6} type="Design"/>
//           <Cube2 title="Write documentation" time={3} type="Documentation"/>
//           <Cube2 title="Test payment integration" time={5} type="Testing"/>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Cube1({
//   icon,
//   number,
//   deskription,
// }: {
//   icon: string;
//   number: number;
//   deskription: string;
// }) {
//   return (
//     <div className="w-62 h-32 bg-white rounded-lg shadow-md p-4 text-black">
//       <div className="text-2xl">{icon}</div>
//       <div className="text-xl font-bold">{number}</div>
//       <div className="text-sm">{deskription}</div>
//     </div>
//   );
// }

// function Cube2({
//   title,
//   time,
//   type,
// }: {
//   title: string;
//   time: number;
//   type: string;
// }) {
//   return (
//     <div className="w-140 h-24 bg-white rounded-lg shadow-md p-4 text-black flex items-center">
//       <div className="h-8 w-8 border border-black rounded-full"></div>
//       <div className="pl-6">
//         <div className="text-xl">{title}</div>
//         <div className="flex items-center">
//           <div className="text-md">{time}h</div>
//           <div className="text-sm p-2 bg-gray-200 ml-4 rounded-xl">{type}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <Button wording="Satu">ok</Button>
      <Card title="NestJS">
        <Button wording="NEstJs">yes</Button>
      </Card>
      <Card title="NextJS">
        <div className="bg-green-500">
          <p className="text-white">
            Saya sedang belajar NestJS untuk menjadi backend developer
          </p>
        </div>
      </Card>

      <Test title="Tabel" >
        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
          </thead>
        </table>
      </Test>
       <Test title="Lingkaran">
       <div className="h-48 w-48 rounded-full border bg-blue-500"></div>
      </Test>
    </main>
  );
}

function Button({
  wording,
  children,
}: {
  wording: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h1>{wording}</h1>
      <div className="text-red-500 font-bold">{children}</div>
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className=" border border-red-500 mt-5 rounded-lg  shadow-md px-2">
      <div className="border-b border-red-500  py-2 ">
        <h5 className="font-bold text-red-500"> {title}</h5>
      </div>
      <div className="py-3 text-sm p-5 rounded-2xl shadow-2xl">{children}</div>
    </section>
  );
}

function Test({ title, children }: { title:string, children: React.ReactNode }) {
  return (
    <div className="bg-green-500">
      <p className="text-white">
       {title}
      </p>

      <div className="border mt-5 px-5 bg-red-500">{children}</div>
    </div>
  );
}
