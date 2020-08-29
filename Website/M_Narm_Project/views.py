
from django.http import HttpResponse
from django.shortcuts import render
from django.views import View

from django.db import connection


class Main_page(View):
    template_name = 'Futuristic-Travel.html'

    def get(self, request, *args, **kwargs):
        with connection.cursor() as cursor:
            cursor.execute("select * from [M_Narm_Project].[dbo].Travel")
            row = cursor.fetchall()
            cursor.close()

        idList = list()
        customerIDList = list()
        initialPointList = list()
        destinationList = list()
        flightNumberList = list()
        seatNumberStartList = list()
        seatNumberEndList = list()
        priceList = list()
        purchaseDateList = list()
        flightDateList = list()
        flightTimeList = list()
        numberofTicketList = list()
        statusList = list()
        print(row)
        for i in row:
            idList.append(i[0])
            customerIDList.append(i[1])
            initialPointList.append(i[2])
            destinationList.append(i[3])
            flightNumberList.append(i[4])
            seatNumberStartList.append(i[5])
            seatNumberEndList.append(i[6])
            priceList.append(i[7])
            purchaseDateList.append(i[8])
            flightDateList.append(i[9])
            flightTimeList.append(i[10])
            numberofTicketList.append(i[11])
            statusList.append(i[12])
        Dict ={
            "ID": idList,
            "CustomerID": customerIDList,
            "InitialPoint": initialPointList,
            "Destination": destinationList,
            "FlightNumber": flightNumberList,
            "SeatNumberStart": seatNumberStartList,
            "SeatNumberEnd": seatNumberEndList,
            "Price": priceList,
            "PurchaseDate": purchaseDateList,
            "FlightDate": flightDateList,
            "FlightTime": flightTimeList,
            "NumberofTicket": numberofTicketList,
            "status": statusList
        }

        return render(request, self.template_name,Dict)

    def CancelFunc(request):
        if request.method == 'GET':
            bankCard = request.GET['bankNum']
            with connection.cursor() as cursor1:
                cursor1.execute("UPDATE [M_Narm_Project].[dbo].Customer SET  [M_Narm_Project].[dbo].Customer.BankCardNumber =  %s",[bankCard])
                cursor1.close()
            with connection.cursor() as cursor2:
                cursor2.execute("UPDATE [M_Narm_Project].[dbo].Travel SET  [M_Narm_Project].[dbo].Travel.status ='CANCLE' WHERE [M_Narm_Project].[dbo].Travel.ID = '2012191' ")
                cursor2.close()
            print("trip is canceled")
            print(bankCard)

            return HttpResponse(200)
    def ChangeFunc(request):
        if request.method == 'GET':
            bankCard = request.GET['bankNum']
            with connection.cursor() as cursor1:
                cursor1.execute("UPDATE [M_Narm_Project].[dbo].Customer SET  [M_Narm_Project].[dbo].Customer.BankCardNumber =  %s",[bankCard])
                cursor1.close()
            with connection.cursor() as cursor2:
                cursor2.execute("UPDATE [M_Narm_Project].[dbo].Travel SET  [M_Narm_Project].[dbo].Travel.status ='CHANGE' WHERE [M_Narm_Project].[dbo].Travel.ID = '2012191' ")
                cursor2.close()
            print("trip is changed")
            print(bankCard)

            return HttpResponse(200)