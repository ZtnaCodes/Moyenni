function makeNumericInput(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    input.addEventListener('input', function(e) {
        // Allow only parseFloats and one decimal point
        this.value = this.value
            .replace(/[^0-9.]/g, '') // Remove non-numeric except dot
            .replace(/(\..*)\./g, '$1'); // Allow only one decimal point
        
        // Optional: Limit to 2 decimal places
        if (this.value.includes('.')) {
            const parts = this.value.split('.');
            if (parts[1].length > 2) {
                this.value = parts[0] + '.' + parts[1].substring(0, 2);
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const allIds = [
        'm11d', 'm11e', 'm21d', 'm21e', 'p11d', 'p11e', 'p11t',
        'p21d', 'p21e', 'p21t', 'p31d', 'p31e', 'p31t', 'p41d', 
        'p41e', 'p41t', 'i11d', 'i11e', 'i21d', 'i21e', 'fr1d', 
        'fr1e', 'ang1d', 'ang1e', 'm12d', 'm12e', 'm22d', 'm22e',
        'p12d', 'p12e', 'p12t', 'p22d', 'p22e', 'p22t', 'p32d',
        'p32e', 'p32t', 'p42d', 'p42e', 'p42t', 'i12d', 'i12e',
        'i22d', 'i22e', 'i32d', 'i32e', 'fr2d', 'fr2e', 'ang2d', 'ang2e'
    ];
    
    allIds.forEach(id => makeNumericInput(id));
});

function moy(x,y){
    let m=(30*x + 70*y)/100;
    return m;
}

function moybtp(x,y,z){
    let m=(25*x+25*z+50*y)/100;
    return m;
}

function calcul1(){
     let m1d=document.getElementById('m11d').value;
     m1d=parseFloat(m1d.trim());
     let m1e=document.getElementById('m11e').value;
     m1e=parseFloat(m1e.trim());
     let m2d=document.getElementById('m21d').value;
     m2d=parseFloat(m2d.trim());
     let m2e=document.getElementById('m21e').value;
     m2e=parseFloat(m2e.trim());
     let p1d=document.getElementById('p11d').value;
     p1d=parseFloat(p1d.trim());
     let p1e=document.getElementById('p11e').value;
     p1e=parseFloat(p1e.trim());
     let p1t=document.getElementById('p11t').value;
     p1t=parseFloat(p1t.trim());
     let p2d=document.getElementById('p21d').value;
     p2d=parseFloat(p2d.trim());
     let p2e=document.getElementById('p21e').value;
     p2e=parseFloat(p2e.trim());
     let p2t=document.getElementById('p21t').value;
     p2t=parseFloat(p2t.trim());
     let p3d=document.getElementById('p31d').value;
     p3d=parseFloat(p3d.trim());
     let p3e=document.getElementById('p31e').value;
     p3e=parseFloat(p3e.trim());
     let p3t=document.getElementById('p31t').value;
     p3t=parseFloat(p3t.trim());
     let p4d=document.getElementById('p41d').value;
     p4d=parseFloat(p4d.trim());
     let p4e=document.getElementById('p41e').value;
     p4e=parseFloat(p4e.trim());
     let p4t=document.getElementById('p41t').value;
     p4t=parseFloat(p4t.trim());
     let i1d=document.getElementById('i11d').value;
     i1d=parseFloat(i1d.trim());
     let i1e=document.getElementById('i11e').value;
     i1e=parseFloat(i1e.trim());
     let i2d=document.getElementById('i21d').value;
     i2d=parseFloat(i2d.trim());
     let i2e=document.getElementById('i21e').value;
     i2e=parseFloat(i2e.trim());
     let frd=document.getElementById('fr1d').value;
     frd=parseFloat(frd.trim());
     let fre=document.getElementById('fr1e').value;
     fre=parseFloat(fre.trim());
     let angd=document.getElementById('ang1d').value;
     angd=parseFloat(angd.trim());
     let ange=document.getElementById('ang1e').value;
     ange=parseFloat(ange.trim());
 

    if (isNaN(angd) || isNaN(ange) || isNaN(frd) || isNaN(fre) || isNaN(m1d) || isNaN(m1e) || isNaN(m2d) || isNaN(m2e) || isNaN(p1d) || isNaN(p1e) || isNaN(p1t) || isNaN(p2d) || isNaN(p2e) || isNaN(p2t) || isNaN(p3d) || isNaN(p3e) || isNaN(p3t) || isNaN(p4d) || isNaN(p4e) || isNaN(p4t) || isNaN(i1d) || isNaN(i1e) || isNaN(i2d) || isNaN(i2e)){
        document.getElementById('msg1').innerHTML='3abi notetek lkol!!';
        document.getElementById('msg1').style.color='red';
        document.getElementById('moyenne1').innerHTML='';
    }else{
        document.getElementById('msg1').style.color='#b7d5d4';
        let m1=moy(m1d,m1e);
        let m2=moy(m2d,m2e);
        let p1=moybtp(p1d,p1e,p1t);
        let p2=moybtp(p2d,p2e,p2t);
        let p3=moybtp(p3d,p3e,p3t);
        let p4=moybtp(p4d,p4e,p4t);
        let i1=moy(i1d,i1e);
        let i2=moy(i2d,i2e);
        let fr=moy(frd,fre);
        let ang=moy(angd,ange);
        
        let s=(parseFloat(m1)+parseFloat(m2))*2+(parseFloat(p1)+parseFloat(p2)+parseFloat(p3)+parseFloat(p4)+parseFloat(i1)+parseFloat(i2))*1.5+(parseFloat(fr)+parseFloat(ang))*1;
        let m=s/15;
        m=m.toFixed(2);
        let msg='';
        document.getElementById('moyenne1').innerHTML=String(m);
        if (m<10){
            msg='normal inshallah e jey 5ir <3';
        }else if(m<14){
            msg='hamdoullah wassel';
        }else{
            msg='tbarkallahhh !!!'
        }
        document.getElementById('msg1').innerHTML=msg;
    }
}

function calcul2(){
    const m1d=parseFloat(document.getElementById('m12d').value);
    const m1e=parseFloat(document.getElementById('m12e').value);
    
    const m2d=parseFloat(document.getElementById('m22d').value);
    const m2e=parseFloat(document.getElementById('m22e').value);

    const p1d=parseFloat(document.getElementById('p12d').value);
    const p1e=parseFloat(document.getElementById('p12e').value);
    const p1t=parseFloat(document.getElementById('p12t').value);

    const p2d=parseFloat(document.getElementById('p22d').value);
    const p2e=parseFloat(document.getElementById('p22e').value);
    const p2t=parseFloat(document.getElementById('p22t').value);

    const p3d=parseFloat(document.getElementById('p32d').value);
    const p3e=parseFloat(document.getElementById('p32e').value);
    const p3t=parseFloat(document.getElementById('p32t').value);

    const p4d=parseFloat(document.getElementById('p42d').value);
    const p4e=parseFloat(document.getElementById('p42e').value);
    const p4t=parseFloat(document.getElementById('p42t').value);

    const i1d=parseFloat(document.getElementById('i12d').value);
    const i1e=parseFloat(document.getElementById('i12e').value);

    const i2d=parseFloat(document.getElementById('i22d').value);
    const i2e=parseFloat(document.getElementById('i22e').value);

    const i3d=parseFloat(document.getElementById('i32d').value);
    const i3e=parseFloat(document.getElementById('i32e').value);

    const frd=parseFloat(document.getElementById('fr2d').value);
    const fre=parseFloat(document.getElementById('fr2e').value);

    const angd=parseFloat(document.getElementById('ang2d').value);
    const ange=parseFloat(document.getElementById('ang2e').value);

    if (isNaN(angd) || isNaN(ange) || isNaN(frd) || isNaN(fre) || isNaN(m1d) || isNaN(m1e) || isNaN(m2d) || isNaN(m2e) || isNaN(p1d) || isNaN(p1e) || isNaN(p1t) || isNaN(p2d) || isNaN(p2e) || isNaN(p2t) || isNaN(p3d) || isNaN(p3e) || isNaN(p3t) || isNaN(p4d) || isNaN(p4e) || isNaN(p4t) || isNaN(i1d) || isNaN(i1e) || isNaN(i2d) || isNaN(i2e) || isNaN(i3d) || isNaN(i3e) ){
        document.getElementById('msg2').innerHTML='3abi notetek lkol!!';
        document.getElementById('msg2').style.color='red';
        document.getElementById('moyenne2').innerHTML='';
    }else{
        document.getElementById('msg2').style.color='#b7d5d4';
        let m1=moy(m1d,m1e);
        let m2=moy(m2d,m2e);
        let p1=moybtp(p1d,p1e,p1t);
        let p2=moybtp(p2d,p2e,p2t);
        let p3=moybtp(p3d,p3e,p3t);
        let p4=moybtp(p4d,p4e,p4t);
        let i1=moy(i1d,i1e);
        let i2=moy(i1d,i2e);
        let i3=moy(i3d,i3e);
        let fr=moy(frd,fre);
        let ang=moy(angd,ange);

        let s=(i1+p2)*1.5+(m2+m1+p4)*2+(p1+p3+i2+i3+fr+ang);
        let m=s/15;
        m=m.toFixed(2);
        
        let msg='';

        document.getElementById('moyenne2').innerHTML=String(m);
        
        if (m<10){
            msg='normal inshallah e jey 5ir <3';
        }else if(m<14){
            msg='hamdoullah wassel';
        }else{
            msg='tbarkallahhh !!!'
        }
        document.getElementById('msg2').innerHTML=msg;
    }
}

function calcul(){
    m1=parseFloat(document.getElementById('moyenne1').innerHTML);
    m2=parseFloat(document.getElementById('moyenne2').innerHTML);

    if (isNaN(m1) || isNaN(m2)){
        document.getElementById('msg').innerHTML='i7seb sem1 w 2 9ball!!';
        document.getElementById('msg').style.color='red';
    }else{
        document.getElementById('msg').style.color='#b7d5d4';
        let s=m1+m2*2;
        let m=s/3;
        m=m.toFixed(2);

        document.getElementById('moyenne').innerHTML=String(m);

        if (m<10){
            msg='ysir 3al 3assir nshlh jey 5ir';
        }else if(m<14){
            msg='mabrouk w inshallah jey 5ir';
        }else{
            msg='aya mabroukkkk !!!'
        }
        document.getElementById('msg').innerHTML=msg;
    }
}