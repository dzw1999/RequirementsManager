def getSpreadData(strupath:str,relapath:str):
    res=""
    with open(relapath,"r",encoding='UTF-8') as f:
        res=f.read()
    fakeres=""
    fakeresfile=r"C:\Users\wang9\Desktop\2\fakeresfile.txt"
    with open(fakeresfile,"r",encoding='UTF-8') as f:
        # lines=f.readlines()
        # for line in lines:
        #     fakeres+=line+"\n"
        fakeres=f.read()
    return fakeres