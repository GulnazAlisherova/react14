function ExchangeRate(props) {
  const rate = 89;
  return ( 
    <div className="ExchangeRate">
     {props.from}/{props.to} = {rate}
    </div>
   );
}

export default ExchangeRate; 