def getSpreadData(strupath:str,relapath:str):
    res=""
    with open(relapath,"r",encoding='UTF-8') as f:
        res=f.read()
    return res