 "use client";
import {useState} from "react";
export default function UnlockSimulado(){
 const [password,setPassword]=useState("");const [error,setError]=useState("");const [busy,setBusy]=useState(false);
 async function unlock(e){e.preventDefault();setBusy(true);setError("");try{const r=await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password,scope:"exam"})});if(!r.ok)throw new Error("Senha do simulado incorreta.");location.href="/simulado";}catch(err){setError(err.message)}finally{setBusy(false)}}
 return <form onSubmit={unlock} className="panel" style={{marginTop:14}}><b>Liberação do simulado</b><p style={{fontSize:12,color:"#627184"}}>Digite a senha que o instrutor informou para esta etapa da aula.</p><input className="field" type="password" placeholder="Senha do simulado" value={password} onChange={e=>setPassword(e.target.value)} required/><button className="btn btn-orange" disabled={busy}>{busy?"Validando…":"Liberar simulado"}</button>{error&&<div className="error">{error}</div>}</form>
}