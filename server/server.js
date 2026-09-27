const express=require('express');const cors=require('cors');
const app=express();app.use(cors());app.use(express.json());
let events=[
{id:1,name:'CodeChef Weekly Contest',category:'Coding',date:'2026-10-05',time:'18:00',venue:'ABES EC Lab 3',description:'Weekly problem-solving contest for all coding enthusiasts.'},
{id:2,name:'Web Development Workshop',category:'Workshop',date:'2026-10-08',time:'15:00',venue:'Seminar Hall',description:'Build and deploy your first modern web application.'},
{id:3,name:'48-Hour Hackathon',category:'Hackathon',date:'2026-10-15',time:'10:00',venue:'Innovation Lab',description:'Build, collaborate and turn an idea into a working prototype.'}
];
let registrations=[];let nextEvent=4,nextReg=1;
app.get('/api/events',(req,res)=>res.json(events));
app.post('/api/events',(req,res)=>{const e={id:nextEvent++,...req.body};events.push(e);res.status(201).json(e)});
app.put('/api/events/:id',(req,res)=>{const i=events.findIndex(e=>e.id==req.params.id);if(i<0)return res.status(404).json({message:'Event not found'});events[i]={...events[i],...req.body,id:events[i].id};res.json(events[i])});
app.delete('/api/events/:id',(req,res)=>{events=events.filter(e=>e.id!=req.params.id);res.json({message:'Deleted'})});
app.get('/api/registrations',(req,res)=>res.json(registrations));
app.post('/api/registrations',(req,res)=>{const r={id:nextReg++,registeredAt:new Date().toISOString(),...req.body};registrations.push(r);res.status(201).json(r)});
app.delete('/api/registrations/:id',(req,res)=>{registrations=registrations.filter(r=>r.id!=req.params.id);res.json({message:'Deleted'})});
app.get('/api/health',(req,res)=>res.json({status:'ok'}));
app.listen(5000,()=>console.log('API running on http://localhost:5000'));
