package com.trip.taosnew.service;

import com.trip.taosnew.model.Client;

import java.util.List;

public interface IClientService {
    Client addClient(Client client);
    List<Client> getClient();

    Client updateClient(Client client ,Long id);

    Client getClientById(Long id);


    void deleteClient(Long id);

}
