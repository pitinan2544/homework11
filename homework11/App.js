export default function App() {
    const [counters, setCounters] = React.useState([{ id: 1, number: 0 }]);
    let total = counters.reduce((a, c) => a + c.number, 0);
    console.log(total);
  
    const hdlAddCounter = () =>
      setCounters([
        ...counters,
        {
          id: counters.length === 0 ? 1 : counters.at(-1).id + 1,
          number: 0,
        },
      ]);
  
  //   const hdlUpdate = (id, num) => {
  //     const cloneCounters = [...counters];
  //     let idx = cloneCounters.findIndex((el) => el.id === id);
  //     if (cloneCounters[idx].number + num < 0) {
  //       return;
  //     }
  //     cloneCounters[idx].number += num;
  //     setCounters(cloneCounters);
  //   };
  
  // ให้ทำ hdlDelCounter ผลลัพธ์เดียวกัน : "ไม่เกิน2 บรรทัด"
  const hdlUpdate =(id,num) => {
      setCounters( counters.map(el => ({ ...el,number: (el.id===id && el.number+num >=0) ? el.number +num :el.number})))
  }
  
    // x
      // const hdlDelCounter = (id) => {
      //   const cloneCounters = [...counters];
      //   let idx = cloneCounters.findIndex((el) => el.id === id);
      //   cloneCounters.splice(idx, 1);
      //   setCounters(cloneCounters);
      // };
  
        //ให้ทำ hdlDelCounter ผลลัพธ์เดียวกัน : "ไม่เกิน2 บรรทัด"
  
    const hdlDelCounter = (id) => {setCounters((prevCounters) => prevCounters.filter((counter) => counter.id !== id));};
  
  
  
    return (
      <>
        <h1 className="text-center">Codecamp Academy</h1>
        <button className="text-center" onClick={hdlAddCounter}>
          Add Counter
        </button>
        <SumInfo total={total} />
  
        {counters.map((el) => (
          <Counter
            key={el.id}
            item={el}
            hdlUpdate={hdlUpdate}
            hdlDelCounter={hdlDelCounter}
          />
        ))}
      </>
    );
  }
